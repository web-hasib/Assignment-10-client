import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I submit a new recipe?",
      answer:
        "Go to the 'Add Recipe' page, fill in the required details like title, ingredients, instructions, and image, then click 'Submit'. Your recipe will be added to the 'All Recipes' page.",
    },
    {
      question: "Do I need an account to add or like recipes?",
      answer:
        "Yes, you must be logged in to add, like, or manage your personal recipes. Login ensures your content is saved to your profile.",
    },
    {
      question: "Can I edit or delete my own recipes?",
      answer:
        "Yes, navigate to 'My Recipes' to edit or delete any recipe you have submitted.",
    },
    {
      question: "What is the wishlist feature?",
      answer:
        "You can add recipes to your wishlist to save them for later. It's like bookmarking your favorite dishes.",
    },
    {
      question: "How is the 'Top Recipes' section determined?",
      answer:
        "'Top Recipes' are based on the number of likes received from users. The most liked recipes are shown there.",
    },
    {
      question: "Is it possible to filter recipes by cuisine or category?",
      answer:
        "Yes, you can browse and filter recipes by cuisine type and categories such as Breakfast, Dessert, Vegan, and more.",
    },
    {
      question: "How do I contact support?",
      answer:
        "For any issues or feedback, you can email us at hasib@example.com or use the contact info available in the footer.",
    },
  ];

  return (
    <section className=" mx-auto p-5">
      <h2 className="text-center py-10 text-3xl text-blue-400 font-bold">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="collapse collapse-arrow bg-red-100/90">
            <input type="checkbox" className="peer" />
            <div className="text-green-900 collapse-title text-lg font-semibold peer-checked:text-blue-700">
              {faq.question}
            </div>
            <div className="collapse-content text-gray-700 italic">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
