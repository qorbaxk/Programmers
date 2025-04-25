-- 코드를 입력하세요


select a.category, a.price as MAX_PRICE, a.product_name
from food_product a
join (
    SELECT max(price) as MAX_PRICE, category 
    from food_product 
    group by category 
    having category in ('과자','국','김치','식용유')
) b
on a.category = b.category and a.price = b.MAX_PRICE
order by a.price desc;