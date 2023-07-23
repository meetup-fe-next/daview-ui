'use client';

import { useState } from 'react';

import Button from '@/components/Button';
import { getCreatorsFromGithub, saveCreatorsToAlgolia, searchCreatorsFromAlgolia } from '@/server/controllers/creators';
import { getLecturesFromGithub, saveLecturesToAlgolia, searchLecturesFromAlgolia } from '@/server/controllers/lectures';
import Input from '@/components/Input';

function Test() {
  const [inputs, setInputs] = useState({
    creators: '',
    lectures: '',
  });
  const [buttons, setButtons] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.id]: e.target.value,
    });
  };

  /**
   * API TEST 1 함수
   */
  const getCreators = async () => {
    setButtons({ ...buttons, button1: true });
    const res = await getCreatorsFromGithub();
    setButtons({ ...buttons, button1: false });
    console.log(res);
  };

  const getLectures = async () => {
    setButtons({ ...buttons, button2: true });
    const res = await getLecturesFromGithub();
    setButtons({ ...buttons, button2: false });
    console.log(res);
  };

  const saveCreators = async () => {
    setButtons({ ...buttons, button3: true });
    const res = await saveCreatorsToAlgolia();
    setButtons({ ...buttons, button3: false });
    console.log(res);
  };

  const saveLectures = async () => {
    setButtons({ ...buttons, button4: true });
    const res = await saveLecturesToAlgolia();
    setButtons({ ...buttons, button4: false });
    console.log(res);
  };

  /**
   * API TEST 2 함수
   */
  const searchCreators = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;

    const search = inputs.creators;
    const res = await searchCreatorsFromAlgolia(search);

    console.log(res);
  };
  const searchLectures = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;

    const search = inputs.lectures;
    const res = await searchLecturesFromAlgolia(search);

    console.log(res);
  };

  return (
    <div className="mt-8">
      <h3 className="text-3xl">API TEST 1 </h3>
      <p className="text-base">
        meetup-fe-next/review-contents에서 콘텐츠가 추가될 때마다, Github Action에서 돌아갈 Script입니다.
        <br />
        (해당 script들은 PR 코드리뷰 이후에, meetup-fe-next/review-contents로 옮겨질 예정입니다.)
      </p>
      <div className="mt-4 flex flex-col gap-4">
        <Button color="primary" disabled={buttons.button1} onClick={getCreators}>
          {buttons.button1 ? 'loading...' : 'Github에서 creators 가져오기'}
        </Button>
        <Button color="primary" disabled={buttons.button2} onClick={getLectures}>
          {buttons.button2 ? 'loading...' : 'Github에서 lectures 가져오기'}
        </Button>
        <Button color="primary" disabled={buttons.button3} onClick={saveCreators}>
          {buttons.button3 ? 'loading...' : 'Algolia에 creators 저장하기'}
        </Button>
        <Button color="primary" disabled={buttons.button4} onClick={saveLectures}>
          {buttons.button4 ? 'loading...' : 'Algolia에 lectures 저장하기'}
        </Button>
      </div>

      <h3 className="mt-8 text-3xl">API TEST 2 </h3>
      <p className="text-base">
        Algolia에서 검색 결과를 가져오는 API입니다. <br /> (키워드 검색 후 enter 치면, fetch 작업을 진행합니다.)
      </p>
      <div className="mt-4 flex flex-col gap-4">
        <Input
          id="creators"
          value={inputs.creators}
          onChange={handleChange}
          onKeyDown={searchCreators}
          placeholder="크리에이터 검색"
        />
        <Input
          id="lectures"
          value={inputs.lectures}
          onChange={handleChange}
          onKeyDown={searchLectures}
          placeholder="강의 검색"
        />
      </div>
    </div>
  );
}

export default Test;
