-- 코드를 작성해주세요
select d.dept_id, d.dept_name_en, 
    round(avg(e.sal),0) as AVG_SAL
from hr_department as d
inner join hr_employees as e
on d.dept_id = e.dept_id
group by d.dept_id
order by AVG_SAL desc;