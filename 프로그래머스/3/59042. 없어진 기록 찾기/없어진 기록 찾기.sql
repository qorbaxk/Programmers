-- 코드를 입력하세요
SELECT animal_id, name
from animal_outs as o
where animal_id not in (
    select animal_id from animal_ins    
)