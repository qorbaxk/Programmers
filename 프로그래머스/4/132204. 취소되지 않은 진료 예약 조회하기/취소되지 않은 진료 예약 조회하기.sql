-- 코드를 입력하세요
SELECT a.APNT_NO, p.pt_name, a.PT_NO, a.MCDP_CD, d.DR_NAME, a.APNT_YMD
from appointment as a
join patient as p on a.pt_no = p.pt_no
join doctor as d on a.MDDR_ID = d.DR_ID
where Date(a.apnt_ymd) = Date('2022-04-13') and a.apnt_cncl_yn = 'N' and a.MCDP_CD = 'CS'
order by a.apnt_ymd asc;