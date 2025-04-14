-- 코드를 작성해주세요
select 
    sum(hg.score) as score, 
    he.emp_no, he.emp_name, he.position, he.email
from 
    hr_department as hd,
    hr_employees as he,
    hr_grade as hg
where 
    hd.dept_id = he.dept_id and
    he.emp_no = hg.emp_no
group by hg.emp_no
order by score desc
limit 1;