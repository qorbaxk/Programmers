# -- 코드를 입력하세요
# SELECT p.member_name, r.review_text, date_format(r.review_date, '%Y-%m-%d') as REVIEW_DATE
# from rest_review r
# join member_profile p
# on r.member_id = p.member_id
# where r.member_id in (
#     SELECT member_id
#     from rest_review
#     group by member_id
#     order by count(*) desc
#     limit 1
# )



-- 가장 많이 리뷰를 작성한 멤버 1명을 먼저 구하고
SELECT 
  p.member_name, 
  r.review_text, 
  DATE_FORMAT(r.review_date, '%Y-%m-%d') AS REVIEW_DATE
FROM rest_review r
JOIN member_profile p ON r.member_id = p.member_id
JOIN (
    SELECT member_id
    FROM rest_review
    GROUP BY member_id
    ORDER BY COUNT(*) DESC
    LIMIT 1
) most_active ON r.member_id = most_active.member_id
order by REVIEW_DATE asc, r.review_text asc;