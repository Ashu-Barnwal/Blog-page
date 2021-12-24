import { FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom"

const Back = () => {
    const navigate = useNavigate();
    return (
        <div
            className="btn text-muted mt-2"
            onClick={() => navigate(-1)}
        >
            <h3>
                <FaArrowCircleLeft /> Go back
            </h3>
        </div>
    )
}

export default Back
