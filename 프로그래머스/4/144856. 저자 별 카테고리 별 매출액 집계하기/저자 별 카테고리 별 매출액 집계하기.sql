-- 코드를 입력하세요
select b.author_id, a.author_name, b.category, sum(s.gkq * b.price) as TOTAL_SALES
from book b
join author a on b.author_id = a.author_id
join (
    SELECT book_id, sum(sales) as gkq
    from book_sales
    where year(sales_date) = 2022 and month(sales_date) = 1
    group by book_id
) s
on b.book_id = s.book_id
group by b.author_id, b.category
order by b.author_id asc, b.category desc;