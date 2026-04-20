const questionBank = [
  {
    id: 1,
    scope: ["all", "theory-greece"],
    badge: "핵심 이론",
    sub: "스포츠관광 기본 개념",
    question: "게츠(Getz)가 설명한 스포츠관광의 관점으로 가장 적절한 것은?",
    options: [
      "개인의 단순 취미 활동만을 뜻한다.",
      "개최지의 지역경제와 공동체 이익을 위한 스포츠이벤트 개발·마케팅 과정이다.",
      "프로선수의 해외 전지훈련만을 말한다.",
      "스포츠용품 판매 행위만을 뜻한다."
    ],
    answer: 1,
    explanation: "게츠는 스포츠관광을 개최지의 지역경제와 공동체 이익 달성을 위한 스포츠이벤트의 개발 및 마케팅 과정으로 설명한다."
  },
  {
    id: 2,
    scope: ["all", "theory-greece"],
    badge: "핵심 이론",
    sub: "스포츠관광 유형",
    question: "교재에서 제시한 스포츠관광의 4가지 유형으로 옳은 것은?",
    options: [
      "관람형·유산형·체험형·운동형",
      "관전형·투자형·이주형·체류형",
      "엘리트형·프로형·아마형·생활형",
      "국내형·국외형·단기형·장기형"
    ],
    answer: 0,
    explanation: "교재는 스포츠관광을 관람형, 유산형, 체험형, 운동형으로 구분한다."
  },
  {
    id: 3,
    scope: ["all", "theory-greece"],
    badge: "핵심 이론",
    sub: "학자별 분류",
    question: "깁슨(Gibson)이 제시한 스포츠관광 분류로 옳은 것은?",
    options: [
      "능동형·이벤트형·노스텔지어형",
      "관광형·비관광형·유학형",
      "관람형·체험형·운동형",
      "국제형·국내형·지역형"
    ],
    answer: 0,
    explanation: "깁슨은 스포츠관광을 능동형(active), 이벤트형(event), 노스텔지어형(nostalgia)으로 나누어 설명한다."
  },
  {
    id: 4,
    scope: ["all", "theory-greece"],
    badge: "핵심 이론",
    sub: "관광의 정의",
    question: "UNWTO 기준으로 관광을 가장 정확하게 설명한 것은?",
    options: [
      "여행보다 넓은 개념이며 1년 초과 체류도 포함한다.",
      "일상 환경을 벗어난 1년 미만의 비보수 목적 이동을 뜻한다.",
      "취업 목적의 장기 이주만을 말한다.",
      "교통수단을 이용한 모든 이동을 관광으로 본다."
    ],
    answer: 1,
    explanation: "UNWTO는 관광을 일상적 환경 밖에서 1년 미만 체류하는 비보수 목적 방문 활동으로 본다. 따라서 관광은 여행보다 좁다."
  },
  {
    id: 5,
    scope: ["all", "theory-greece"],
    badge: "핵심 이론",
    sub: "올림픽 유산",
    question: "올림픽 유산의 대표 범주로 가장 적절한 것은?",
    options: [
      "정치유산·국방유산·종교유산·상업유산",
      "경제유산·사회문화유산·도시유산·환경유산·스포츠유산",
      "개인유산·기업유산·교육유산·해양유산",
      "건축유산·도로유산·군사유산·교통유산"
    ],
    answer: 1,
    explanation: "올림픽 유산은 일반적으로 경제, 사회문화, 도시, 환경, 스포츠 유산으로 분류된다."
  },
  {
    id: 6,
    scope: ["all", "theory-greece"],
    badge: "핵심 이론",
    sub: "장소성",
    question: "스포츠관광 도시의 핵심 조건으로 가장 적절한 것은?",
    options: [
      "접근성만 중요하고 장소성은 중요하지 않다.",
      "장소성(sense of place)과 매력성(attraction)이 중요하다.",
      "종목이 같으면 어느 도시나 동일한 가치가 있다.",
      "시설 규모만 크면 관광도시는 자동으로 완성된다."
    ],
    answer: 1,
    explanation: "스포츠관광 도시는 경기장만으로 형성되지 않는다. 그 지역만의 장소성과 관광 매력성이 함께 있어야 한다."
  },
  {
    id: 7,
    scope: ["all", "theory-greece"],
    badge: "그리스",
    sub: "관람형 스포츠관광",
    question: "파나티나이코 경기장이 스포츠관광지로 특별한 이유는?",
    options: [
      "전자스포츠 경기장이라서",
      "스키 경기장 역할을 해서",
      "무술 경기장으로 유명해서",
      "근대 올림픽의 상징적 개최지이기 때문에"
    ],
    answer: 3,
    explanation: "파나티나이코 경기장은 1896년 제1회 근대 올림픽과 직접 연결되는 상징적 장소다."
  },
  {
    id: 8,
    scope: ["all", "theory-greece"],
    badge: "그리스",
    sub: "유산형 스포츠관광",
    question: "올림피아가 스포츠관광지로 독보적인 이유는 무엇인가?",
    options: [
      "최초 축구장이 있어서",
      "국제대회가 상시 개최되어서",
      "현대 스포츠시설이 많아서",
      "고대 올림픽의 실제 개최지이기 때문에"
    ],
    answer: 3,
    explanation: "올림피아는 고대 올림픽이 실제로 열렸던 장소라서 유산형 스포츠관광의 핵심지로 평가된다."
  },
  {
    id: 9,
    scope: ["all", "theory-greece"],
    badge: "그리스",
    sub: "스포츠식문화",
    question: "지중해 식단이 스포츠관광객의 체력 유지에 효율적인 이유는?",
    options: [
      "회복에 불리해서",
      "기름진 음식 비중이 커서",
      "단백질이 부족해서",
      "신선한 채소·해산물 중심이어서"
    ],
    answer: 3,
    explanation: "지중해 식단은 신선한 채소, 과일, 해산물, 올리브유 중심으로 구성되어 스포츠 활동 후 회복과 체력 유지에 유리하다."
  },
  {
    id: 10,
    scope: ["all", "theory-greece"],
    badge: "그리스",
    sub: "운동형 스포츠관광",
    question: "그리스가 다양한 스포츠관광 유형을 제공할 수 있는 자연·지형적 근거는?",
    options: [
      "산악·해양·도시가 공존하기 때문에",
      "빙원 중심 국가이기 때문에",
      "단일 평야 지형으로 이루어져서",
      "사막 지형이 발달해서"
    ],
    answer: 0,
    explanation: "그리스는 산악 지형, 해안과 섬, 역사 도시가 함께 있어 운동형·관람형·유산형 스포츠관광을 모두 연결하기 쉽다."
  },
  {
    id: 11,
    scope: ["all", "theory-greece"],
    badge: "그리스",
    sub: "트레일 러닝",
    question: "그리스에서 세계적 트레일 러닝 대회가 열리는 지역은?",
    options: [
      "미코노스",
      "자고리(Zagori)",
      "산토리니",
      "로도스"
    ],
    answer: 1,
    explanation: "자고리는 그리스의 대표적인 트레일 러닝 지역으로, 국제적으로 알려진 산악 러닝 대회가 열린다."
  },
  {
    id: 12,
    scope: ["all", "europe"],
    badge: "이탈리아",
    sub: "체험형 자전거 관광",
    question: "체험형 자전거 관광에서 토스카나가 인기인 이유는?",
    options: [
      "자전거 금지 지역이기 때문에",
      "기후가 지나치게 추워서",
      "언덕, 포도밭, 전통 마을이 이어지는 코스가 많아서",
      "평지만 있어 매우 단순해서"
    ],
    answer: 2,
    explanation: "토스카나는 구릉지와 포도밭, 전통 마을이 연결된 풍경 덕분에 사이클링 관광지로 특히 인기가 높다."
  },
  {
    id: 13,
    scope: ["all", "europe"],
    badge: "이탈리아",
    sub: "관람형 축구관광",
    question: "산시로 경기장이 관광객에게 매력적인 이유는?",
    options: [
      "AC 밀란과 인터의 전통, 팬문화를 함께 체험할 수 있어서",
      "해수욕장과 바로 붙어 있어서",
      "입장료가 가장 저렴해서",
      "지어진 지 얼마 안 된 최신 건물이라서"
    ],
    answer: 0,
    explanation: "산시로는 AC 밀란과 인터 밀란의 역사와 팬문화를 함께 경험할 수 있는 상징적 관람형 스포츠관광지다."
  },
  {
    id: 14,
    scope: ["all", "europe"],
    badge: "이탈리아",
    sub: "모터스포츠",
    question: "관람형 모터스포츠 관광에서 몬차가 유명한 이유는?",
    options: [
      "평지 경기장이라서",
      "경기장이 가장 작아서",
      "해변과 인접해서",
      "F1 전통 서킷이자 ‘속도의 성지’로 불리기 때문에"
    ],
    answer: 3,
    explanation: "몬차는 오랜 F1 전통을 지닌 서킷으로, 빠른 코스 특성 때문에 ‘속도의 성지’라 불린다."
  },
  {
    id: 15,
    scope: ["all", "europe"],
    badge: "이탈리아",
    sub: "산악 체험관광",
    question: "돌로미티가 체험형 관광의 중심지인 이유는?",
    options: [
      "도시형 관광지라서",
      "산악 레저가 사계절 가능해서",
      "스포츠시설이 거의 없어서",
      "해발이 낮아서"
    ],
    answer: 1,
    explanation: "돌로미티는 여름 하이킹·클라이밍, 겨울 스키·스노슈 활동이 가능해 사계절 체험형 산악 관광지로 유명하다."
  },
  {
    id: 16,
    scope: ["all", "europe"],
    badge: "이탈리아",
    sub: "올림픽 유산",
    question: "1960년 로마 올림픽의 상징적 특징은?",
    options: [
      "우주 개발을 주제로 삼았다.",
      "동계와 하계를 동시에 개최했다.",
      "고대 유산과 현대 스포츠를 결합했다.",
      "사막 기후 적응형 대회였다."
    ],
    answer: 2,
    explanation: "1960년 로마 올림픽은 고대 로마 유산 공간과 현대 올림픽이 결합된 상징성이 강한 대회였다."
  },
  {
    id: 17,
    scope: ["all", "europe"],
    badge: "이탈리아",
    sub: "메가이벤트",
    question: "2026 동계 올림픽이 밀라노-코르티나 공동 개최로 이루어진 이유는?",
    options: [
      "도시 문화와 알프스 환경을 결합하기 위해",
      "두 도시가 모두 해안도시이기 때문에",
      "시설이 크게 부족해서",
      "개최국이 중간에 바뀌어서"
    ],
    answer: 0,
    explanation: "밀라노의 도시 문화와 코르티나의 알프스 설상 환경을 함께 활용하는 것이 공동 개최의 핵심 취지다."
  },
  {
    id: 18,
    scope: ["all", "europe"],
    badge: "이탈리아",
    sub: "도시재생",
    question: "2006년 토리노 동계올림픽이 도시 발전에 기여한 내용은?",
    options: [
      "공항을 폐쇄했다.",
      "산업도시에서 스포츠·문화 도시로 전환하는 계기가 되었다.",
      "항만 중심 도시로 변모했다.",
      "스키 시설을 모두 폐쇄했다."
    ],
    answer: 1,
    explanation: "토리노는 동계올림픽을 계기로 산업도시 이미지를 넘어 스포츠·문화·관광 도시로 재정비되었다."
  },
  {
    id: 19,
    scope: ["all", "europe"],
    badge: "스페인",
    sub: "관람형 스포츠관광",
    question: "스페인을 찾는 스포츠 관광객 중 가장 인기가 높은 관람형 종목은?",
    options: [
      "스키",
      "축구",
      "투우",
      "수영"
    ],
    answer: 1,
    explanation: "스페인은 라리가와 대형 축구 경기장 투어를 중심으로 관람형 스포츠관광의 대표 국가로 꼽힌다."
  },
  {
    id: 20,
    scope: ["all", "europe"],
    badge: "스페인",
    sub: "한국 적용 시사점",
    question: "스페인 스포츠관광 모델이 한국 스포츠관광에 주는 가장 중요한 시사점은?",
    options: [
      "지역 자치와 생활 스포츠 기반 관광 콘텐츠 개발",
      "국제대회 유치 경쟁만 강화",
      "대형 실내 스포츠시설만 확대",
      "엘리트 스포츠 투자만 집중"
    ],
    answer: 0,
    explanation: "스페인은 지역 특성과 생활 스포츠를 결합한 관광 콘텐츠 개발이 강점이어서 한국에도 지역 기반 스포츠관광 전략의 시사점을 준다."
  },
  {
    id: 21,
    scope: ["all", "europe"],
    badge: "스페인",
    sub: "해양 스포츠",
    question: "스페인의 해양 스포츠 관광지로 SUP·윈드서핑이 인기 많은 지역은?",
    options: [
      "카나리제도",
      "마드리드 내륙",
      "세비야 도심",
      "카스티야 평원"
    ],
    answer: 0,
    explanation: "카나리제도는 바람과 해양 조건이 좋아 SUP, 윈드서핑, 서핑 등 해양 스포츠관광이 활발하다."
  },
  {
    id: 22,
    scope: ["all", "europe"],
    badge: "스페인",
    sub: "설상 스포츠",
    question: "스페인의 피레네 산맥은 어떤 스포츠관광에 적합한 지역인가?",
    options: [
      "스키·스노우보드",
      "서핑",
      "승마",
      "사막 트레킹"
    ],
    answer: 0,
    explanation: "피레네 산맥은 설상 환경과 리조트 인프라를 갖춰 스키와 스노우보드 관광에 적합하다."
  },
  {
    id: 23,
    scope: ["all", "europe"],
    badge: "스페인",
    sub: "축구 유산",
    question: "FC 바르셀로나의 홈구장으로 가장 널리 알려진 경기장은?",
    options: [
      "베르나베우",
      "메트로폴리타노",
      "산 마메스",
      "캄프 누"
    ],
    answer: 3,
    explanation: "캄프 누는 FC 바르셀로나를 상징하는 대표 경기장으로, 스페인 스포츠관광에서 핵심 관람지다."
  },
  {
    id: 24,
    scope: ["all", "europe"],
    badge: "스페인",
    sub: "사이클링",
    question: "스페인의 대표적인 사이클링 그랜드 투어의 이름은?",
    options: [
      "투르 드 말라가",
      "부엘타 아 에스파냐",
      "롬바르디아 투어",
      "지로 디탈리아"
    ],
    answer: 1,
    explanation: "스페인의 대표 그랜드 투어는 부엘타 아 에스파냐다."
  },
  {
    id: 25,
    scope: ["all", "europe"],
    badge: "영국",
    sub: "아웃도어 스포츠",
    question: "영국 하이랜드 지역이 스포츠관광에서 인기인 이유는?",
    options: [
      "트레킹·러닝관광 중심지이기 때문에",
      "생태관광만 가능해서",
      "역사문화관광만 발달해서",
      "해양관광만 특화되어서"
    ],
    answer: 0,
    explanation: "하이랜드는 장거리 걷기길과 트레일 러닝 코스가 발달해 운동형 스포츠관광의 대표지로 꼽힌다."
  },
  {
    id: 26,
    scope: ["all", "europe"],
    badge: "영국",
    sub: "테니스 전통",
    question: "윔블던 테니스 대회의 가장 큰 관광적 특징은?",
    options: [
      "인공 잔디 사용",
      "실내 경기 운영",
      "복장 규정 자유",
      "잔디코트 전통과 엄격한 예절 강조"
    ],
    answer: 3,
    explanation: "윔블던은 잔디코트, 올화이트 드레스 코드, 전통과 예절을 중시하는 대회 문화가 가장 큰 특징이다."
  },
  {
    id: 27,
    scope: ["all", "europe"],
    badge: "영국",
    sub: "골프 유산",
    question: "스코틀랜드 세인트앤드루스가 중요한 이유는?",
    options: [
      "최초 럭비 경기장이 있어서",
      "SUP 중심지라서",
      "잉글랜드 대표팀 훈련장이어서",
      "골프의 발상지로 불리기 때문에"
    ],
    answer: 3,
    explanation: "세인트앤드루스는 ‘골프의 발상지’ 혹은 ‘Home of Golf’로 불리는 세계적 스포츠 유산관광지다."
  },
  {
    id: 28,
    scope: ["all", "europe"],
    badge: "영국",
    sub: "럭비",
    question: "런던 트위커넘 스타디움이 유명한 이유는?",
    options: [
      "암벽등반 대회장이라서",
      "영국 럭비의 중심지이기 때문에",
      "EPL 결승 전용이어서",
      "올림픽 마라톤 출발지여서"
    ],
    answer: 1,
    explanation: "트위커넘은 ‘Home of Rugby’로 불리는 영국 럭비의 상징적 경기장이다."
  },
  {
    id: 29,
    scope: ["all", "europe"],
    badge: "영국",
    sub: "근대 스포츠사",
    question: "영국이 근대 스포츠의 발상지로 평가받는 근거는?",
    options: [
      "체육교육 제도가 늦게 정착해서",
      "20세기 이후에 스포츠를 개발해서",
      "축구·골프·테니스·럭비·크리켓의 규범화가 영국에서 시작되어서",
      "스포츠에 소극적인 국가였기 때문에"
    ],
    answer: 2,
    explanation: "현대 스포츠의 규칙화와 협회 조직화가 영국에서 먼저 이루어진 종목이 많아 근대 스포츠의 발상지로 평가된다."
  },
  {
    id: 30,
    scope: ["all", "europe"],
    badge: "영국",
    sub: "관람객 접근성",
    question: "런던 히스로 공항이 스포츠관광에 중요한 이유는?",
    options: [
      "경기장이 공항 안에 있어서",
      "국내선 전용 공항이라서",
      "국제 관람객의 주된 입국 관문이기 때문에",
      "SUP 대회 개최지이기 때문에"
    ],
    answer: 2,
    explanation: "히스로 공항은 런던과 영국을 방문하는 국제 관람객의 대표적 입국 관문 역할을 한다."
  },
  {
    id: 31,
    scope: ["all", "europe"],
    badge: "프랑스",
    sub: "동계 스포츠 역사",
    question: "프랑스가 동계 스포츠관광 강국으로 자리 잡게 된 역사적 계기로 가장 적절한 것은?",
    options: [
      "1924년 파리 올림픽",
      "1968년 파리 올림픽",
      "1924년 샤모니 동계올림픽",
      "1998년 파리 월드컵"
    ],
    answer: 2,
    explanation: "샤모니 1924는 최초의 동계올림픽으로 인정되며 프랑스 동계 스포츠관광의 상징적 출발점이다."
  },
  {
    id: 32,
    scope: ["all", "europe"],
    badge: "프랑스",
    sub: "모터스포츠",
    question: "24시간 쉬지 않고 달려야 하는 세계적 내구 자동차 경주로 유명한 프랑스의 대회는 무엇인가?",
    options: [
      "바레인 그랑프리",
      "인디 500",
      "모나코 그랑프리",
      "르망 24시"
    ],
    answer: 3,
    explanation: "르망 24시는 프랑스를 대표하는 세계적 내구 레이스로, 24시간 주행이라는 독특한 성격을 가진다."
  },
  {
    id: 33,
    scope: ["all", "europe"],
    badge: "프랑스",
    sub: "트레일 러닝",
    question: "UTMB가 개최되는 중심 도시로, 세계 트레일 러닝의 성지로 불리는 곳은 어디인가?",
    options: [
      "샤모니",
      "안시",
      "그르노블",
      "디종"
    ],
    answer: 0,
    explanation: "UTMB는 샤모니를 중심으로 프랑스·이탈리아·스위스를 연결하는 대표적 운동형 스포츠관광 이벤트다."
  },
  {
    id: 34,
    scope: ["all", "europe"],
    badge: "프랑스",
    sub: "와인·사이클 관광",
    question: "와인 관광과 사이클 관광이 결합된 루트로 유명한 프랑스 지역은 어디인가?",
    options: [
      "브르타뉴",
      "코르시카",
      "노르망디",
      "보르도"
    ],
    answer: 3,
    explanation: "보르도는 와인 루트와 자전거 관광이 결합된 대표 지역으로 자주 언급된다."
  },
  {
    id: 35,
    scope: ["all", "europe"],
    badge: "프랑스",
    sub: "해양 스포츠",
    question: "프랑스 남서부의 세계적 서핑 관광지로 유명한 해변 도시는 어디인가?",
    options: [
      "칸",
      "비아리츠",
      "니스",
      "몽펠리에"
    ],
    answer: 1,
    explanation: "비아리츠는 프랑스 남서부의 대표 서핑 도시이자 해양 스포츠관광지다."
  },
  {
    id: 36,
    scope: ["all", "europe"],
    badge: "프랑스",
    sub: "올림픽 개최 도시",
    question: "다음 중 하계올림픽을 세 차례 개최한 도시는 어디인가?",
    options: [
      "베이징",
      "아테네",
      "파리",
      "로스앤젤레스"
    ],
    answer: 2,
    explanation: "파리는 1900년, 1924년, 2024년에 하계올림픽을 개최해 세 차례 개최 도시가 되었다."
  },
  {
    id: 37,
    scope: ["all", "europe"],
    badge: "독일",
    sub: "유산관광",
    question: "독일 스포츠 유산관광의 중심 박물관은?",
    options: [
      "유럽 전쟁 박물관",
      "독일 축구 박물관(도르트문트)",
      "자동차 박물관",
      "티벳 문화관"
    ],
    answer: 1,
    explanation: "도르트문트의 독일 축구 박물관은 독일 스포츠 유산관광을 대표하는 공간이다."
  },
  {
    id: 38,
    scope: ["all", "europe"],
    badge: "독일",
    sub: "마라톤 관광",
    question: "독일이 운동형 마라톤 관광지로 유명한 이유는?",
    options: [
      "장거리 대회가 거의 없기 때문에",
      "베를린 마라톤 등 세계적 메이저 대회를 개최하기 때문에",
      "트레일 대회만 많기 때문에",
      "단거리 중심 대회만 열리기 때문에"
    ],
    answer: 1,
    explanation: "베를린 마라톤은 세계적으로 참가 수요가 높은 메이저 대회라 독일의 운동형 마라톤 관광 경쟁력을 높인다."
  },
  {
    id: 39,
    scope: ["all", "europe"],
    badge: "독일",
    sub: "자동차 스포츠관광",
    question: "독일이 자동차 스포츠관광 중심지로 평가받는 이유는?",
    options: [
      "국제 레이싱을 금지하는 나라라서",
      "아우토반과 뉘르부르크링 등 독자적 자동차 문화가 발달했기 때문에",
      "오프로드 중심 국가이기 때문에",
      "자동차 산업의 영향이 약하기 때문에"
    ],
    answer: 1,
    explanation: "독일은 아우토반 문화와 뉘르부르크링 같은 상징적 공간이 결합되어 자동차 스포츠관광 목적지로 평가된다."
  },
  {
    id: 40,
    scope: ["all", "europe"],
    badge: "독일",
    sub: "스포츠관광 도시",
    question: "뮌헨이 스포츠관광 도시로 유명한 이유는?",
    options: [
      "고대 축구의 발상지이기 때문에",
      "세계 최대 럭비 경기장이 있기 때문에",
      "1972년 하계올림픽 개최 도시이기 때문에",
      "스포츠시설이 부족해서"
    ],
    answer: 2,
    explanation: "뮌헨은 1972년 하계올림픽 개최 도시로, 올림픽파크 등 스포츠 유산이 도시 이미지와 관광 경쟁력에 큰 영향을 준다."
  }
];

const WRONG_STORAGE_KEY = "sportsTourismWrongStats_v2";

const elements = {
  tabs: document.querySelectorAll(".tab"),
  scopeSelect: document.getElementById("scopeSelect"),
  shuffleBtn: document.getElementById("shuffleBtn"),
  questionBadge: document.getElementById("questionBadge"),
  questionSub: document.getElementById("questionSub"),
  questionTitle: document.getElementById("questionTitle"),
  optionList: document.getElementById("optionList"),
  explanationBox: document.getElementById("explanationBox"),
  resultBadge: document.getElementById("resultBadge"),
  answerText: document.getElementById("answerText"),
  explanationText: document.getElementById("explanationText"),
  currentIndex: document.getElementById("currentIndex"),
  totalCount: document.getElementById("totalCount"),
  correctCount: document.getElementById("correctCount"),
  wrongCount: document.getElementById("wrongCount"),
  remainingCount: document.getElementById("remainingCount"),
  accuracyCount: document.getElementById("accuracyCount"),
  navigatorGrid: document.getElementById("navigatorGrid"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  resultPanel: document.getElementById("resultPanel"),
  resultSummary: document.getElementById("resultSummary"),
  retrySetBtn: document.getElementById("retrySetBtn"),
  reviewWrongBtn: document.getElementById("reviewWrongBtn"),
  resetWrongBtn: document.getElementById("resetWrongBtn"),
  questionWrap: document.getElementById("questionWrap")
};

const state = {
  mode: "40",
  scope: "all",
  currentQuestions: [],
  currentIndex: 0,
  answers: {},
  wrongStats: loadWrongStats()
};

function loadWrongStats() {
  try {
    const raw = JSON.parse(localStorage.getItem(WRONG_STORAGE_KEY)) || {};
    const normalized = {};

    Object.entries(raw).forEach(([questionId, value]) => {
      if (typeof value === "number") {
        normalized[questionId] = { wrongCount: value, reviewCorrectCount: 0 };
        return;
      }

      if (value && typeof value === "object") {
        normalized[questionId] = {
          wrongCount: Number(value.wrongCount) || 0,
          reviewCorrectCount: Number(value.reviewCorrectCount) || 0
        };
      }
    });

    return normalized;
  } catch (error) {
    return {};
  }
}

function saveWrongStats() {
  localStorage.setItem(WRONG_STORAGE_KEY, JSON.stringify(state.wrongStats));
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getScopedQuestions() {
  if (state.scope === "all") return [...questionBank];
  return questionBank.filter((question) => question.scope.includes(state.scope));
}

function getModeQuestions() {
  const scoped = getScopedQuestions();

  if (state.mode === "wrong") {
    return scoped
      .filter((question) => state.wrongStats[question.id]?.wrongCount > 0)
      .sort((a, b) => {
        const diff = (state.wrongStats[b.id]?.wrongCount || 0) - (state.wrongStats[a.id]?.wrongCount || 0);
        return diff || a.id - b.id;
      });
  }

  const targetCount = Number(state.mode);
  const randomized = shuffle(scoped);
  return randomized.slice(0, Math.min(targetCount, randomized.length));
}

function setActiveTab() {
  elements.tabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.mode === state.mode);
  });
}

function setQuestionSet(resetAnswers = true) {
  const questions = getModeQuestions();
  state.currentQuestions = questions;
  state.currentIndex = 0;
  if (resetAnswers) state.answers = {};
  setActiveTab();
  render();
}

function render() {
  const total = state.currentQuestions.length;
  elements.totalCount.textContent = String(total);
  updateSummary();
  renderNavigator();

  if (!total) {
    renderEmptyState();
    return;
  }

  const question = state.currentQuestions[state.currentIndex];
  const answerState = state.answers[question.id];

  elements.resultPanel.hidden = !isSetCompleted();
  elements.questionWrap.hidden = false;
  elements.prevBtn.disabled = state.currentIndex === 0;
  elements.nextBtn.disabled = false;
  elements.nextBtn.textContent = state.currentIndex === total - 1 ? "마지막" : "다음";

  const wrongMeta = state.wrongStats[question.id];

  elements.questionBadge.textContent = state.mode === "wrong"
    ? `내가 ${wrongMeta?.wrongCount || 0}번 틀린 문제`
    : question.badge;
  elements.questionSub.textContent = state.mode === "wrong"
    ? `오답 누적 순 · 복습 정답 ${(wrongMeta?.reviewCorrectCount || 0)}/3`
    : question.sub;
  elements.questionTitle.textContent = question.question;
  elements.currentIndex.textContent = String(state.currentIndex + 1);
  elements.optionList.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn";
    button.disabled = Boolean(answerState);

    if (answerState) {
      if (index === question.answer) button.classList.add("is-correct");
      if (index === answerState.selected && !answerState.correct && index !== question.answer) {
        button.classList.add("is-wrong");
      }
    }

    const icon = getOptionIcon(question, index, answerState);
    button.innerHTML = `
      <span class="option-label">
        <span class="choice-index">${index + 1}</span>
        <span>${option}</span>
      </span>
      <span class="choice-icon">${icon}</span>
    `;

    button.addEventListener("click", () => handleAnswer(question, index));
    elements.optionList.appendChild(button);
  });

  if (answerState) {
    showExplanation(question, answerState);
  } else {
    elements.explanationBox.hidden = true;
  }

  renderResultPanel();
}

function getOptionIcon(question, index, answerState) {
  if (!answerState) return "";
  if (index === question.answer) return "✓";
  if (!answerState.correct && index === answerState.selected) return "✕";
  return "";
}

function handleAnswer(question, selectedIndex) {
  if (state.answers[question.id]) return;

  const correct = selectedIndex === question.answer;
  state.answers[question.id] = {
    selected: selectedIndex,
    correct
  };

  const currentStat = state.wrongStats[question.id] || { wrongCount: 0, reviewCorrectCount: 0 };

  if (!correct) {
    state.wrongStats[question.id] = {
      wrongCount: currentStat.wrongCount + 1,
      reviewCorrectCount: currentStat.reviewCorrectCount
    };
    saveWrongStats();
    render();
    return;
  }

  if (state.mode === "wrong" && currentStat.wrongCount > 0) {
    const updatedReviewCount = currentStat.reviewCorrectCount + 1;

    if (updatedReviewCount >= 3) {
      delete state.wrongStats[question.id];
    } else {
      state.wrongStats[question.id] = {
        wrongCount: currentStat.wrongCount,
        reviewCorrectCount: updatedReviewCount
      };
    }

    saveWrongStats();
  }

  render();
}

function showExplanation(question, answerState) {
  elements.explanationBox.hidden = false;
  elements.resultBadge.className = `explanation-badge ${answerState.correct ? "correct" : "wrong"}`;
  elements.resultBadge.textContent = answerState.correct ? "정답" : "오답";
  elements.answerText.textContent = `정답은 ${question.answer + 1}번입니다.`;
  elements.explanationText.textContent = question.explanation;
}

function updateSummary() {
  const total = state.currentQuestions.length;
  const answered = state.currentQuestions.filter((question) => state.answers[question.id]);
  const correct = answered.filter((question) => state.answers[question.id].correct).length;
  const wrong = answered.length - correct;
  const remaining = total - answered.length;
  const accuracy = answered.length ? Math.round((correct / answered.length) * 100) : 0;

  elements.correctCount.textContent = String(correct);
  elements.wrongCount.textContent = String(wrong);
  elements.remainingCount.textContent = String(Math.max(remaining, 0));
  elements.accuracyCount.textContent = `${accuracy}%`;
}

function renderNavigator() {
  elements.navigatorGrid.innerHTML = "";

  if (!state.currentQuestions.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "아직 저장된 오답 문제가 없습니다. 먼저 10문항, 20문항, 40문항에서 문제를 풀어보세요.";
    elements.navigatorGrid.appendChild(empty);
    return;
  }

  state.currentQuestions.forEach((question, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "navigator-btn";
    button.textContent = String(index + 1);

    const answerState = state.answers[question.id];
    if (index === state.currentIndex) button.classList.add("is-current");
    if (answerState?.correct) button.classList.add("is-correct");
    if (answerState && !answerState.correct) button.classList.add("is-wrong");

    button.addEventListener("click", () => {
      state.currentIndex = index;
      render();
    });

    elements.navigatorGrid.appendChild(button);
  });
}

function renderEmptyState() {
  elements.questionWrap.hidden = true;
  elements.explanationBox.hidden = true;
  elements.currentIndex.textContent = "0";
  elements.totalCount.textContent = "0";
  elements.prevBtn.disabled = true;
  elements.nextBtn.disabled = true;
  elements.resultPanel.hidden = true;
  elements.questionBadge.textContent = "오답 없음";
  elements.questionSub.textContent = "틀린 문제가 누적되면 이 탭에 자동 저장됩니다.";
}

function isSetCompleted() {
  if (!state.currentQuestions.length) return false;
  return state.currentQuestions.every((question) => state.answers[question.id]);
}

function renderResultPanel() {
  const completed = isSetCompleted();
  elements.resultPanel.hidden = !completed;
  if (!completed) return;

  const total = state.currentQuestions.length;
  const correct = state.currentQuestions.filter((question) => state.answers[question.id]?.correct).length;
  const wrong = total - correct;
  const accuracy = Math.round((correct / total) * 100);
  if (state.mode === "wrong") {
    const remainingWrong = getScopedQuestions().filter((question) => state.wrongStats[question.id]?.wrongCount > 0).length;
    elements.resultSummary.textContent = `총 ${total}문항 중 ${correct}문항 정답, ${wrong}문항 오답입니다. 현재 세트 정답률은 ${accuracy}%이며, 많이 틀리는 문제는 ${remainingWrong}문항 남았습니다. 복습 탭에서 맞힌 문제는 3번 정답 시 자동 제거됩니다.`;
    return;
  }

  elements.resultSummary.textContent = `총 ${total}문항 중 ${correct}문항 정답, ${wrong}문항 오답입니다. 현재 세트 정답률은 ${accuracy}%입니다.`;
}

function moveQuestion(direction) {
  if (!state.currentQuestions.length) return;
  const nextIndex = state.currentIndex + direction;
  if (nextIndex < 0 || nextIndex >= state.currentQuestions.length) return;
  state.currentIndex = nextIndex;
  render();
}

function resetCurrentSet() {
  state.answers = {};
  state.currentIndex = 0;
  render();
}

function resetWrongStats() {
  const confirmed = window.confirm("저장된 오답 기록을 모두 지울까요?");
  if (!confirmed) return;
  state.wrongStats = {};
  saveWrongStats();
  if (state.mode === "wrong") setQuestionSet(true);
  else render();
}

function bindEvents() {
  elements.tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      state.mode = tab.dataset.mode;
      setQuestionSet(true);
    });
  });

  elements.scopeSelect.addEventListener("change", (event) => {
    state.scope = event.target.value;
    setQuestionSet(true);
  });

  elements.shuffleBtn.addEventListener("click", () => {
    setQuestionSet(true);
  });

  elements.prevBtn.addEventListener("click", () => moveQuestion(-1));
  elements.nextBtn.addEventListener("click", () => moveQuestion(1));
  elements.retrySetBtn.addEventListener("click", resetCurrentSet);
  elements.reviewWrongBtn.addEventListener("click", () => {
    state.mode = "wrong";
    setQuestionSet(true);
  });
  elements.resetWrongBtn.addEventListener("click", resetWrongStats);
}

bindEvents();
setQuestionSet(true);
