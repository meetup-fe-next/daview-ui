export type AlgoliaSearchResult<T> = {
  // 검색 결과로 반환된 항목들의 배열
  hits: T[];

  // 총 검색 결과의 개수
  nbHits: number;

  // 현재 페이지 번호
  page: number;

  // 총 페이지 수
  nbPages: number;

  // 한 페이지당 최대로 반환되는 항목 수
  hitsPerPage: number;

  // 검색 처리 시간 (밀리초 단위)
  processingTimeMS: number;

  // 총 결과 개수가 정확한지 여부를 나타내는 플래그
  exhaustiveNbHits: boolean;

  // 검색에 사용된 쿼리 문자열
  query: string;
};

// 객체를 저장할 인덱스에 필요한 데이터 형식
export type ObjectToSave = {
  objectID: string;
  // 기타 저장할 필드들...
};

// 객체 배열을 저장할 인덱스에 필요한 데이터 형식
export type ObjectsToSave = ObjectToSave[];
