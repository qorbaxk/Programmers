-- 코드를 입력하세요
select cart_id
from cart_products
where 
    cart_id in (SELECT cart_id from cart_products where name = 'milk' group by cart_id) and
    cart_id in (SELECT cart_id from cart_products where name = 'yogurt' group by cart_id)
group by cart_id
order by cart_id asc;