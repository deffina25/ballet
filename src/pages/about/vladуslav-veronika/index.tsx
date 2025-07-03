import { useEffect, useState } from 'react';
import axios, { type AxiosResponse } from 'axios';
import { AboutUs } from '../../../component/AboutUs';

export const Index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/about-us', {
        params: {
          populate: {
            block1: {
              populate: '*',
            },
            block2: {
              populate: '*',
            },
            block3: {
              populate: '*',
            },
            block4: {
              populate: '*',
            },
            block5: {
              populate: '*',
            },
          },
        },
      })
      .then((response: AxiosResponse) => {
        setData(response.data.data);
      })
      .catch((error: Error) => {
        console.error('Ошибка при загрузке данных', error);
      });
  }, []);

  return (
    <section className="container mx-auto max-w-[1202px] px-4 pt-[86px] pb-[5.813rem]">
      {data && <AboutUs data={data} />}
    </section>
  );
};

export default Index;
