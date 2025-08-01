import React from 'react'

const Subscription = () => {
    const plans = [
        {
            name: 'Free',
            price: '₹0/mo',
            features: [
                'List Products on SellKaroo Marketplace',
                'Unlimited Product Listings',
                <strong>10% Commission per Sale</strong>,
                'Community Support',
                'No Personal Storefront',
            ],
        },
        {
            name: 'Standard',
            price: '₹199/mo',
            features: [
                'Own Storefront (up to 50 Products)',
                'Seller Dashboard Access',
                '3% Commission per Sale',
                'Priority Support',
                'Custom Store URL',
            ],
        },
        {
            name: 'Premium',
            price: '₹499/mo',
            features: [
                'Unlimited Products on Personal Store',
                '0% Commission on Sales',
                'Advanced Store Customization',
                '24/7 Support',
                'Analytics & Reports',
                'Promotional Banner Placements',
            ],
        },
    ];


    return (
        <div className="bg-gray-50 lg:py-20 py-6 px-10 flex flex-col items-center">
            <h1 className="text-2xl font-bold text-[#479789] mb-8">Choose Your Plan</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-[#479789] hover:shadow-lg transition duration-300 min-h-[400px] flex flex-col"
                    >
                        <h2 className="text-xl font-semibold text-[#479789]">{plan.name}</h2>
                        <p className="text-2xl font-bold my-4">{plan.price}</p>
                        <ul className="mb-6 text-gray-700 space-y-2">
                            {plan.features.map((feature, i) => (
                                <li key={i}>• {feature}</li>
                            ))}
                        </ul>
                        <div className="mt-auto">
                            <button className="w-full bg-[#479789] text-white py-2 rounded-xl hover:bg-[#3d8377] transition duration-300">
                                Select Plan
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Subscription