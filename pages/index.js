import { useRouter } from 'next/router';
import Form from '../components/Form';

const Index = () => {
  const router = useRouter();

  const submit = value => router.push(`/user/${value}`);

  return <Form onSubmit={submit} />;
};

export default Index;
