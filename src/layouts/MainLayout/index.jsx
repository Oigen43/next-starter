import PropTypes from 'prop-types';

export default function MainLayout({ children }) {
  return (
    <>
      <div>Main</div>
      {children}
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
