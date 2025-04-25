-- 코드를 입력하세요
SELECT a.rest_id, a.rest_name, a.food_type, a.favorites, a.address, b.SCORE
from rest_info a
join (
    select rest_id, round(avg(review_score),2) as SCORE
    from rest_review
    group by rest_id
) b
on a.rest_id = b.rest_id
where address like '서울%'
order by b.SCORE desc, a.favorites desc;
