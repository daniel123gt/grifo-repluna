export default function CardGeneric({
  text1,
  text2,
  text3,
  variant,
}: {
  text1: string;
  text2: string;
  text3: string;
  variant?: string;
}) {
  return (
    <div className={`stat shadow ${variant && 'bg-green-100'}`}>
      <div className='stat-title'>{text1}</div>
      <div className={`stat-value ${variant && 'text-green-800'}`}>{text2}</div>
      <div className='stat-desc'>{text3}</div>
    </div>
  );
}
