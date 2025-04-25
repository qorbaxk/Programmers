-- 코드를 입력하세요
select o.product_id, p.product_name, sum(o.amount) * p.price as TOTAL_SALES
from food_order as o
inner join food_product as p
on o.product_id = p.product_id
where year(o.produce_date) = 2022 and month(o.produce_date) = 5
group by o.product_id
order by TOTAL_SALES desc, o.product_id asc;
