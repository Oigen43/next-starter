import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import useUser from 'resources/user/hooks';

import FormInput from 'components/FormInput';

import styles from './styles.module.scss';

const schema = yup.object().shape({
  email: yup.string().email('errors.email').required(),
  password: yup.string().required(),
});

export default function SignIn() {
  const {
    handleSubmit, register, formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log('ddd');
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          {...register('email')}
          errors={errors.email}
        />
        <FormInput
          {...register('password')}
          errors={errors.password}
        />
        <button type="submit">sss</button>
      </form>
    </div>
  );
}
