-- 코드를 입력하세요
SELECT left(PRODUCT_CODE,2) as CATEGORY, count(left(PRODUCT_CODE,2)) as PRODUCTS
from product
group by left(PRODUCT_CODE,2)
order by product_code asc;