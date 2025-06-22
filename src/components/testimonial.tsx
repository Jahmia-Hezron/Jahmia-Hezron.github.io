interface TestimonialCardProps {
    name: string;
    quote: string;
    className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, quote, className }) => {
    return (
        <div className={`testimonial-card ${className || ""}`}>

            <h3 className="testimonial-name">— {name}</h3>
            <blockquote className="testimonial-quote">
                <p>{quote}</p>
            </blockquote>

        </div>
    );
};

export default TestimonialCard;
