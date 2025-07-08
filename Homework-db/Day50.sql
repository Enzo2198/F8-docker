drop table if exists enrollments;
--  Ex1:
drop table if exists students;
create table if not exists students (
    student_id serial primary key,
    full_name varchar,
    email varchar unique,
    birth_date date
);

-- Ex2:
drop table if exists teachers;
create table if not exists teachers (
    teacher_id serial primary key,
    full_name varchar,
    department varchar
);

-- Ex3:
drop table if exists courses;
create table if not exists courses (
   course_id serial primary key,
   course_name varchar,
   teacher_id int
);

-- Ex4:
drop table if exists enrollments;
create table if not exists enrollments (
    enrollment_id serial primary key,
    student_id int references students(student_id),
    course_id int references courses(course_id),
    enrolled_at date default current_date
);

-- Ex5: Thêm cột phone vào bảng students.
alter table students add column phone int;

-- Ex6: Thêm 3 sinh viên.
insert into students(full_name, email, birth_date, phone)
values ('Student 1', 'student1@gmail.com', '2025-06-22', 123456789),
       ('Student 2', 'student2@gmail.com', '2025-06-23', 234567891),
       ('Student 3', 'student3@gmail.com', '2025-06-24', 345678910);

-- Ex7: Thêm 2 giảng viên.
insert into teachers(full_name, department)
values ('Teacher 1', 'Math teacher'),
       ('Teacher 2', 'English teacher');

-- Ex8: Thêm 3 khóa học.
insert into courses(course_name, teacher_id)
values ('TOEIC', 2),
       ('IELTS', 2),
       ('Calculus', 1);

-- Ex9: Thêm 5 lượt đăng ký học.
insert into enrollments(student_id, course_id)
values (1, 2),
       (1, 3),
       (2, 1),
       (3, 1),
       (3, 3);

-- Ex10: Hiển thị tất cả sinh viên.
select * from students;

-- Ex11: Liệt kê khóa học và tên giảng viên.
select
    courses.course_id,
    courses.course_name,
    teachers.full_name as teacher_name
from courses
         join teachers on teachers.teacher_id = courses.teacher_id;

-- Ex12: Liệt kê tên sinh viên và tên các khóa học họ đã đăng ký
select
    enrollments.enrollment_id,
    students.full_name as student_name,
    courses.course_name as course_name
from enrollments
         join students on students.student_id = enrollments.student_id
         join courses on courses.course_id = enrollments.course_id;

-- Ex13: Cập nhật số điện thoại sinh viên có email student2@gmail.com.
update students set phone = '222333456' where email = 'student2@gmail.com';

-- Ex14: Cập nhật tên môn học.
update courses set course_name = 'Toeic' where course_name = 'TOEIC';
update courses set course_name = 'Ielts' where course_name = 'IELTS';

-- Ex15: Xoá sinh viên có email student1@gmail.com.
delete from enrollments where student_id = 1;
delete from students where email = 'student1@gmail.com';

-- Ex16: Xoá môn học có tên “Backend”.
delete from enrollments where course_id = 1;
delete from courses where course_name = 'Toeic';

-- Ex17: Liệt kê tên các môn học và tên giảng viên phụ trách.
select
    courses.course_id,
    courses.course_name,
    teachers.full_name as teacher_name
from courses
         join teachers on teachers.teacher_id = courses.teacher_id;

-- Ex18: Liệt kê tất cả các môn học và tên giảng viên (nếu có). Môn học chưa có giảng viên vẫn hiển thị.
insert into courses(course_name)
values ('Fullstack');
select
    courses.course_id,
    courses.course_name,
    teachers.full_name as teacher_name
from courses
         left join teachers on teachers.teacher_id = courses.teacher_id;

-- Ex19: Hiển thị tên sinh viên và mã khóa học mà sinh viên đã đăng ký.
select
    students.full_name as student_name,
    enrollments.course_id
from enrollments
         join students on students.student_id = enrollments.student_id;

-- Ex20: Hiển thị toàn bộ môn học và sinh viên đăng ký (nếu có). Môn học chưa có sinh viên vẫn hiển thị.
select
    courses.course_name,
    students.full_name
from courses
         left join enrollments on courses.course_id = enrollments.course_id
         left join students on students.student_id = enrollments.student_id;
