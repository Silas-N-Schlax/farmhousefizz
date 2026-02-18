import { ItemCard } from './item-card'

export function MenuCard({data}) {
  return (
    <>
      <div className="sign-drinks">
        {data.map((item, index) => {
          if (item.active === false) return;
          return <ItemCard
          name={item.name}
          desc={item.desc}
          lq_type={item.lq_type}
          sizes={item.sizes}
          notices={item.notices}
          id={item.id}
          key={item.id}
          />
        })}
      </div>
    </>
  )
}