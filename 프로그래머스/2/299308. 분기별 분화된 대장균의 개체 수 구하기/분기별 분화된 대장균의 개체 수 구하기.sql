-- 코드를 작성해주세요
select
    concat(quarter(DIFFERENTIATION_DATE),'Q') as quarter,
    count(*) as ecoli_count
from ecoli_data
group by quarter
order by quarter asc;