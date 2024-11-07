const PrimaryBtn: React.FC<{ title: string }> = ({ title }) => {
  return (
    <button type='button' className='btn btn-primary'>
      {title}
    </button>
  )
}

export default PrimaryBtn
