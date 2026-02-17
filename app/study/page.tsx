import Counter from '@/app/study/counter';
import styles from '@/app/study/study.module.css';

export default async function Page() {
  return (
    <div className="flex flex-col h-screen">
      <p>Study Page</p>
      <Counter />
      <div className="size-40 bg-sky-600 mt-[117px]">Card 1</div>
      <div className={`${styles.card} bg-sky-900`}>Card 2</div>

      <br />

      <Title />
    </div>
  )
}

function Title() {
  return (
    <div className="h-auto w-48 border-4 border-rose-700 p-4 text-left font-extrabold text-red-800/80">
      <div className="text-lg sm:text-2xl md:text-3xl">Roses</div>
      <div className="mt-1 text-2xl sm:text-3xl md:text-4xl">Daycare</div>
    </div>
  )
}
