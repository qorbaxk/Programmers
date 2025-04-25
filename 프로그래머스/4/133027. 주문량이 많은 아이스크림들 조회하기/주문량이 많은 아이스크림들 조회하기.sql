-- 코드를 입력하세요
select h.flavor
from first_half as h
inner join july as j
on h.flavor = j.flavor
group by h.flavor, j.flavor
order by h.total_order + sum(j.total_order) desc
limit 3;