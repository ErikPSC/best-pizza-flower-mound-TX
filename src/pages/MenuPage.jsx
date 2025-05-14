import React from 'react';

const MenuPage = () => {
  // Placeholder data - in a real app, this would come from a CMS or API
  const menuCategories = [
    {
      name: 'Heavenly Pizzas',
      items: [
        { name: 'The Classic Pepperoni', description: 'Our signature thin crust topped with generous amounts of premium pepperoni and rich tomato sauce.', price: '$15.99' },
        { name: 'Supreme Being', description: 'A divine combination of pepperoni, sausage, mushrooms, onions, green peppers, and black olives.', price: '$18.99' },
        { name: 'Garden of Eden Veggie', description: 'A paradise of fresh garden vegetables including bell peppers, onions, mushrooms, olives, and tomatoes.', price: '$16.99' },
        { name: 'BBQ Chicken Blessing', description: 'Tender grilled chicken, red onions, cilantro, and a tangy BBQ sauce drizzle on our crispy crust.', price: '$17.99' },
        { name: 'Meat Lover\'s Miracle', description: 'A hearty helping of pepperoni, sausage, ham, and bacon for the truly devoted meat eater.', price: '$19.99' },
        { name: 'Margherita Grace', description: 'Simple yet elegant, with fresh mozzarella, basil, and a touch of olive oil on a tomato base.', price: '$14.99' },
      ],
    },
    {
      name: 'Appetizers from Above',
      items: [
        { name: 'Garlic Knots of Glory', description: 'Warm, soft bread knots tossed in garlic butter and Parmesan, served with marinara.', price: '$7.99' },
        { name: 'Cheesy Breadsticks Seraphim', description: 'Oven-baked breadsticks covered in melted mozzarella, served with marinara.', price: '$8.99' },
        { name: 'Wings of an Angel (6pc/12pc)', description: 'Choose from Buffalo, BBQ, or Garlic Parmesan. Served with ranch or blue cheese.', price: '$9.99 / $17.99' },
      ],
    },
    {
      name: 'Salads of Salvation',
      items: [
        { name: 'Caesar\'s Blessing Salad', description: 'Crisp romaine lettuce, Parmesan cheese, croutons, and creamy Caesar dressing.', price: '$9.99' },
        { name: 'Heavenly House Salad', description: 'Mixed greens, tomatoes, cucumbers, red onions, and your choice of dressing.', price: '$8.99' },
      ],
    },
    {
      name: 'Divine Desserts',
      items: [
        { name: 'Cloud Nine Cheesecake', description: 'Rich and creamy New York style cheesecake with a graham cracker crust.', price: '$6.99' },
        { name: 'Chocolate Lava Cake Redemption', description: 'Warm chocolate cake with a molten chocolate center, served with a dusting of powdered sugar.', price: '$7.99' },
      ],
    },
    {
      name: 'Beverages',
      items: [
        { name: 'Fountain Drinks', description: 'Coke, Diet Coke, Sprite, Dr. Pepper, Lemonade.', price: '$2.99' },
        { name: 'Iced Tea (Sweet/Unsweet)', description: 'Freshly brewed.', price: '$2.99' },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-4 py-8">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">Our Heavenly Menu</h1>
      
      {menuCategories.map((category) => (
        <section key={category.name} className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-red-500 pb-2">{category.name}</h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            {category.items.map((item) => (
              <div key={item.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-700 mb-1">{item.name}</h3>
                  {item.price && <p className="text-lg font-semibold text-red-500">{item.price}</p>}
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="text-center mt-12">
        <a href="#" className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
          Order Online Now (Flower Mound)
        </a>
      </div>
      <p className="text-center text-gray-600 mt-4 text-sm">
        Prices and availability subject to change. Please confirm when ordering.
      </p>
    </div>
  );
};

export default MenuPage;

