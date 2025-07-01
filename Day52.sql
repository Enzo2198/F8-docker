-- Ex1:
drop table if exists users;
create table if not exists users (
    id serial primary key,
    full_name varchar(100),
    email varchar(100) unique,
    gender varchar(10),
    date_of_birth date,
    country_code varchar(2),
    created_at timestamp
);

drop table if exists categories;
create table if not exists categories (
    id serial primary key,
    category_name varchar(100) unique,
    parent_category_id int references categories(id)
);

drop table if exists products;
create table if not exists products (
    id serial primary key,
    product_name varchar(255),
    price decimal(10, 2),
    category_id int references categories(id),
    created_at timestamp
);

drop table if exists orders;
create table if not exists orders (
    id serial primary key,
    user_id int references users(id),
    status varchar(20) ,
    created_at timestamp
);

drop table if exists order_items;
create table if not exists order_items (
    order_id int references orders(id),
    product_id int references products(id),
    quantity int,
    price_at_purchase decimal(10, 2),
    primary key (order_id, product_id)
);

-- Ex2:
    -- Insert 10.000 users:
    insert into users (full_name, email, gender, date_of_birth, country_code)
    select
        'User ' || s,
        'user' || s || '@example.com',
        CASE WHEN random() < 0.5 THEN 'male' ELSE 'female' END,
        '1990-01-01'::date + (random() * 365 * 20)::int,
        (ARRAY['VN', 'US', 'SG', 'JP', 'KR'])[floor(random() * 5 + 1)]
    FROM generate_series(1, 10000) s;

    -- Insert 10 categories:
    INSERT INTO categories (category_name)
    SELECT 'Category ' || s FROM generate_series(1, 10) s;

    -- Insert 1.000 products:
    INSERT INTO products (product_name, price, category_id)
    SELECT
        'Product ' || s,
        (random() * 1000)::DECIMAL(10, 2),
        floor(random() * 10 + 1)
    FROM generate_series(1, 1000) s;

    -- Insert 20.000 orders:
    INSERT INTO orders (user_id, status, created_at)
    SELECT
        floor(random() * 10000 + 1),
        (ARRAY['completed', 'pending', 'cancelled'])[floor(random() * 3 + 1)],
        '2022-01-01'::timestamp + (random() * 730 * 86400) * interval '1 second'
    FROM generate_series(1, 20000) s;

    -- Insert 50.000 order_items:
    INSERT INTO order_items (order_id, product_id, quantity, price_at_purchase)
    SELECT
        floor(random() * 20000 + 1),
        floor(random() * 1000 + 1),
        floor(random() * 5 + 1),
        (random() * 1000)::DECIMAL(10, 2)
    FROM generate_series(1, 50000) s
    ON CONFLICT (order_id, product_id) DO NOTHING;

-- Ex3: Thống kê tổng doanh thu theo từng sản phẩm, chỉ hiển thị sản phẩm có doanh thu > 100,000.
select
    products.id as id,
    products.product_name as product,
    sum(order_items.price_at_purchase * order_items.quantity) as total_revenue
from order_items
join products on products.id = order_items.product_id
group by products.product_name, products.id
having sum(order_items.price_at_purchase * order_items.quantity) > 100000
order by products.id;

-- Ex4: Tìm khách hàng ở 'VN' đã đặt trên 5 đơn hàng 'completed'.
select
    users.full_name as user_name,
    count(orders.user_id) as complete_orders
from users
join orders on orders.user_id = users.id
where users.country_code = 'VN' and orders.status = 'completed'
group by users.id, users.full_name, users.country_code
having count(orders.user_id) > 5
order by users.id;

-- Ex5: Đếm số lượng sản phẩm trong mỗi danh mục, sắp xếp theo tên danh mục.
select
    categories.category_name as name,
    count(products.product_name) as product_count
from categories
join products on products.category_id = categories.id
group by categories.category_name, categories.id
order by categories.id;

-- Ex6: Tìm sản phẩm chưa từng được bán ra (subquery).
select
    products.product_name
from products
left join order_items on products.id = order_items.product_id
where order_items.product_id is null
group by products.product_name, products.id
order by products.id;

-- Ex7: Tìm top 10 khách hàng chi tiêu cao nhất năm 2023 (WITH).
with customer_spending as (
    select
        users.full_name,
        sum(order_items.quantity * order_items.price_at_purchase) as total_spending
    from users
    join order_items on order_items.product_id = users.id
    join orders on orders.user_id = users.id
    where
        orders.status = 'completed'
        and extract(years from orders.created_at) = 2023
    group by users.full_name
)
select * from customer_spending
order by total_spending desc
limit 10;

-- Ex8: Tạo index bao gồm cả email và country_code từ bảng users. Truy vấn chỉ các cột có trong index.
create index users_email_country_code on users(email, country_code);

-- SET enable_seqscan = OFF; -- used to test only index
explain analyse
select email, country_code from users
where email like 'user1%' and country_code = 'VN';

-- Ex9: Tạo 2 chỉ mục đơn trên gender và country_code.Tạo thêm một chỉ mục tổ hợp trên country_code, gender. So sánh truy vấn lọc hai điều kiện.
drop index users_gender_idx;
drop index users_country_code_idx;

create index users_gender_idx on users(gender);
create index users_country_code_idx on users(country_code);


drop index if exists users_gender_country_code;
create index users_gender_country_code on users(country_code, gender);

explain analyse
select * from users where gender = 'male' and country_code = 'VN';

-- Ex10: Viết truy vấn tìm đơn hàng theo user_id và status. Phân tích truy vấn bằng EXPLAIN ANALYZE .Tạo chỉ mục tổ hợp trên (user_id, status).
create index orders_user_id_status on orders(user_id, status);

explain analyse
select user_id, status from orders
where user_id = 21 and status = 'pending';

-- Ex11: Tạo chỉ mục trên cột created_at trong bảng orders. Viết truy vấn lọc theo thời gian, dùng EXPLAIN ANALYZE để xem có dùng chỉ mục không.
create index orders_created_at_idx on orders(created_at);

explain analyse
select created_at from orders where created_at = '2023-09-21'




