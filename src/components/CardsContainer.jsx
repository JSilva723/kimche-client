import { Card } from "./Card";

export const CardsContainer = ({items}) => (
    <div className="grid grid-cols-1 gap-y-4 p-3 sm:grid-cols-3 md:grid-cols-5 content-center justify-items-center">
        {items.map((item) => (
            <Card key={item} imgUrl={item.imgUrl} name={item.name} />
        ))}
    </div>
)