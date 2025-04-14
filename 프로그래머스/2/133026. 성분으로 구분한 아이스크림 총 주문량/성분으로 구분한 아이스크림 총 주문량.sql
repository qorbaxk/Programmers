-- 코드를 입력하세요
SELECT i.ingredient_type as INGREDIENT_TYPE, sum(f.total_order) as TOTAL_ORDER
from first_half as f
inner join icecream_info as i
on f.flavor = i.flavor
group by i.ingredient_type
order by f.total_order asc;