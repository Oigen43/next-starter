import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import submitForm from 'helpers/submit-form';

import { useSignIn } from 'resources/account/account.hooks';

import FormInput from 'components/FormInput';

import styles from './styles.module.scss';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export default function SignIn() {
  const {
    handleSubmit, register, setError, formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { mutateAsync: signIn } = useSignIn();
  const onSubmit = submitForm(signIn, setError);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
