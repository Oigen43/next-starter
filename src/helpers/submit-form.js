export default function submitForm(queryFn, setError) {
  return async (data) => {
    try {
      await queryFn(data);
    } catch (e) {
      const { errors } = e.data;
      Object.keys(errors).forEach((key) => {
        setError(key, { message: errors[key].join(' ') }, { shouldFocus: true });
      });
    }
  };
}
