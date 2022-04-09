import type { GetServerSideProps, NextPage } from 'next';

type Props = {
  data: string;
};

const Home: NextPage<Props> = ({ data }) => {
  return (
    <>
      <div>Home Page</div>
      {data}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  return {
    props: {
      data: `server data, locale: ${context.locale}`,
    },
  };
};

export default Home;
