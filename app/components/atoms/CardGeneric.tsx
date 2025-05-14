export default function CardGeneric({
  text1,
  text2,
  text3,
}: {
  text1: string;
  text2: string;
  text3: string;
}) {
  return (
    <div className='stats shadow'>
      <div className='stat'>
        <div className='stat-title'>{text1}</div>
        <div className='stat-value'>{text2}</div>
        <div className='stat-desc'>{text3}</div>
      </div>
    </div>
  );
}
