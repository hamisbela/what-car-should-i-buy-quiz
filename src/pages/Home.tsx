import React from 'react';
import Quiz from '../components/Quiz';

export default function Home() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">What Car Should I Buy? - Quiz</h1>
        <Quiz />
      </section>

      <section id="guide" className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose lg:prose-lg mx-auto">
          <div className="mb-8">
            <p className="text-lg">
              If you're wondering, <strong>"What car should I buy?"</strong>, you're not alone! Choosing the perfect car can be overwhelming with so many options available. From sedans to SUVs, electric to hybrid vehicles, finding the best car for your needs requires careful consideration. But don't worry – we've got you covered! Our interactive <strong>What Car Should I Buy? Quiz</strong> will help you narrow down your choices and find the ideal vehicle for your lifestyle.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Take the "What Car Should I Buy?" Quiz?</h2>
            <p>
              With countless vehicles on the market, deciding on the right one can feel overwhelming. Whether you're a daily commuter, family-oriented driver, or eco-conscious consumer, our <strong>What Car Should I Buy? Quiz</strong> is designed to match you with a car that fits your lifestyle, budget, and driving requirements.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features Our Quiz Considers</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Vehicle Type:</strong> Sedan, SUV, Electric, Hybrid, or Truck</li>
              <li><strong>Performance:</strong> Engine power, fuel efficiency, and handling</li>
              <li><strong>Usage:</strong> Daily commute, family transport, or work utility</li>
              <li><strong>Budget:</strong> Find the perfect car within your price range</li>
              <li><strong>Lifestyle:</strong> Match your vehicle to your daily needs</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Car Categories</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Best for Families:</strong> Safe, spacious vehicles with modern features</li>
              <li><strong>Best for Commuters:</strong> Fuel-efficient cars with comfortable interiors</li>
              <li><strong>Best for Eco-Conscious:</strong> Electric and hybrid vehicles</li>
              <li><strong>Best for Work:</strong> Reliable trucks and utility vehicles</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How the "What Car Should I Buy?" Quiz Works</h2>
            <p>
              Taking our quiz is quick and easy! Simply answer a few questions about your driving needs, preferred features, and budget, and we'll recommend the best cars for you. Our recommendations are based on extensive research and real-world testing.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Car Buying Tips</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consider Total Cost:</strong> Factor in insurance, maintenance, and fuel</li>
              <li><strong>Safety Features:</strong> Research modern safety technologies</li>
              <li><strong>Test Drive:</strong> Always test drive before making a decision</li>
              <li><strong>Research Reliability:</strong> Check consumer reports and reviews</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Trust Our Car Recommendations?</h2>
            <p>
              Our team consists of automotive experts and car enthusiasts who stay up-to-date with the latest vehicles and technologies. We regularly update our <strong>What Car Should I Buy? Quiz</strong> to include new models and features, ensuring you get the most current recommendations.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Find Your Perfect Car?</h2>
            <p>
              Don't waste hours researching – let our <strong>What Car Should I Buy? Quiz</strong> guide you to the perfect vehicle. Whether you're buying your first car or upgrading your current one, we'll help you make an informed decision.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}