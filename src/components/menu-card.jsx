import { ItemCard } from './item-card'

export function MenuCard({data}) {
  const groupedItems = []
  data.forEach((item) => {
    if (!item.active) return;

    const category = item.category || "Other";

    if (!groupedItems[category]) {
      groupedItems[category] = [];
    }
    groupedItems[category].push(item);
  })

  return (
    <>
      <div className="sign-drinks">
        {Object.entries(groupedItems).map((group, index) => {
          console.log(group)
          return (
            <div className={group[0]}>
              <h1 className="category title">{formatCategory(group[0])}</h1>
              <div className="menu-items">
                {group[1].map((item, index) => {
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
            </div>
          )
        })}
      </div>
    </>
  )
}

function formatCategory(category) {
  if (!category) return "Error - Category Empty"
  category = category.split("-")
  category.map((word, index) => { category[index] = word.charAt(0).toUpperCase() + word.slice(1) })
  return category.join(" ")
}