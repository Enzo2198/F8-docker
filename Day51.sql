-- Ex1:
    drop table if exists departments;
    create table if not exists departments (
       id bigserial primary key,
       name varchar(50)
    );

-- Ex2:
    drop table if exists employees;
    create table if not exists employees (
        id bigserial primary key,
        name varchar(50),
        salary decimal(10,2),
        department_id bigserial references departments(id),
        hire_date date
    );

-- Ex3: Thêm cột position (chức vụ, kiểu chuỗi) vào bảng employees.
    alter table employees add column position varchar;

-- Ex4: Đổi tên cột salary thành monthly_salary.
    alter table employees rename column salary to monthly_salary;

-- Ex5: Thêm tối thiểu 5 bản ghi phòng ban.
    insert into departments(name)
    values ('Sale'), ('HR'), ('ME'), ('FA'), ('TE');

-- Ex6: Thêm tối thiểu 10 bản ghi nhân viên, gán cho các phòng ban khác nhau.
    insert into employees(name, monthly_salary, department_id, hire_date, position)
    values ('Employee 1', 2000, 1, '2024-06-20', 'Manager'),
           ('Employee 2', 3000, 2, '2024-01-21', 'Manager'),
           ('Employee 3', 4000, 3, '2024-02-22', 'Leader'),
           ('Employee 4', 2000, 5, '2024-03-23', 'Staff'),
           ('Employee 5', 4000, 3, '2024-04-24', 'Leader'),
           ('Employee 6', 4000, 5, '2024-05-25', 'Leader'),
           ('Employee 7', 3000, 5, '2024-06-26', 'Staff'),
           ('Employee 8', 2000, 4, '2024-07-27', 'Staff'),
           ('Employee 9', 2000, 5, '2024-08-28', 'Staff'),
           ('Employee 10', 4000, 1, '2024-09-29', 'Leader');

-- Ex7: Truy vấn tất cả nhân viên.
    select * from employees;

-- Ex8: Truy vấn nhân viên thuộc một phòng ban cụ thể.
    select
        employees.id,
        employees.name,
        employees.monthly_salary,
        departments.name as department,
        employees.hire_date,
        employees.position
    from employees
    join departments on departments.id = employees.department_id
    where department_id = 3;

-- Ex9: Đếm số lượng nhân viên theo từng phòng ban.
    select
        departments.name as department,
        count(*) employee_count
    from employees
    join departments on departments.id = employees.department_id
    group by departments.name;

-- Ex10: Tính tổng lương theo từng phòng ban.
    select
        departments.name as department,
        sum(employees.monthly_salary) as total_salary
    from employees
    join departments on departments.id = employees.department_id
    group by departments.name;

-- Ex11: Sắp xếp nhân viên theo lương giảm dần.
    select * from employees
    order by monthly_salary desc;

-- Ex12: Sắp xếp nhân viên theo ngày vào làm tăng dần.
    select * from employees
    order by hire_date;

-- Ex13: Hiển thị các phòng ban có hơn 3 nhân viên.
    select
        departments.name as department,
        count(*) employee_count
    from employees
             join departments on departments.id = employees.department_id
    group by departments.name
    having count(*) > 3;

-- Ex14: Hiển thị các phòng ban có tổng lương > 6,000.
    select
        departments.name as department,
        sum(employees.monthly_salary) as total_salary
    from employees
        join departments on departments.id = employees.department_id
    group by departments.name
    having sum(employees.monthly_salary) > 6000;

-- Ex15: Tìm nhân viên có lương cao hơn mức lương trung bình toàn công ty.
    select
        name,
        monthly_salary
    from employees
    where monthly_salary > (
        select avg(monthly_salary) from employees
    );

-- Ex16: Tìm tên phòng ban có nhân viên lương cao nhất.
    select distinct
        departments.name as department,
        employees.monthly_salary
    from employees
        join departments on departments.id = employees.department_id
    where monthly_salary = (
        select max(employees.monthly_salary) from employees
    );

-- Ex17: Dùng WITH để tính mức lương trung bình từng phòng ban.
    with avg_salary_per_department as (
        select
            department_id,
            avg(monthly_salary) as avg_salary
        from employees
        group by department_id
    )
    select
        departments.name as department,
        avg_salary_per_department.avg_salary as avg_salary
    from avg_salary_per_department
        join departments on departments.id = avg_salary_per_department.department_id;

-- Ex18: Dùng kết quả trên để liệt kê nhân viên có lương cao hơn mức trung bình của phòng ban của họ
    with avg_salary_per_department as (
        select
            department_id,
            avg(monthly_salary) as avg_salary
        from employees
        group by department_id
    )
    select
        employees.name as name,
        departments.name as department,
        employees.monthly_salary as salary
    from employees
        join departments on departments.id = employees.department_id
        join avg_salary_per_department on avg_salary_per_department.department_id = employees.department_id
    where employees.monthly_salary > avg_salary_per_department.avg_salary;

-- Ex19: Truy vấn danh sách phòng ban, kèm theo mảng nhân viên của từng phòng ban dưới dạng JSON.
    select
        departments.id,
        departments.name,
        json_agg(jsonb_build_array(
                 'id', employees.id, 'name', employees.name
                 ))
    from employees
        join departments on employees.department_id = departments.id
    group by departments.id, departments.name
    order by departments.id;

-- Ex20: Tạo cột tạm phân loại lương:****≥ 4,000 → Cao,< 4,000 → Thấp
    select
        id,
        name,
        monthly_salary,
        case when monthly_salary >= 4000 then 'High'
        else 'low' end as salary_classify
    from employees;

-- Ex21: Phân loại cấp bậc nhân viên: Manager → Cấp cao, Staff → Cấp thấp
    select
        id,
        name,
        position,
        case when position in ('Manager', 'Leader') then 'High rank'
        else 'Low rank' end as position_classify
    from employees;

-- Ex22: Dùng EXPLAIN ANALYZE để phân tích truy vấn lấy tất cả nhân viên theo phòng ban
    explain analyze
    select
        departments.id,
        departments.name,
        json_agg(jsonb_build_array(
                'id', employees.id, 'name', employees.name
                 ))
    from employees
        join departments on employees.department_id = departments.id
    group by departments.id, departments.name
    order by departments.id;

-- Ex23: Phân tích truy vấn tìm nhân viên có lương cao hơn trung bình.
    explain analyse
    select
        name,
        monthly_salary
    from employees
    where monthly_salary > (
        select avg(monthly_salary) from employees
    );
