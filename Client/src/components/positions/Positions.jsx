import { useCandidate } from "../../hooks/useCandidate";
import { usePositions } from "../../hooks/usePostions";
import CardPosition from "../cards/CardPosition";


function Positions() {

    const { data: candidatesData, isLoading: isLoadingCandidates, error: errorCandidates } = useCandidate();
    const { data: positionsData, isLoading: isLoadingPositions, error: errorPositions } = usePositions();
    if (isLoadingPositions || isLoadingCandidates) {
        return <div>Loading...</div>;
    }
    if (errorPositions || errorCandidates) {
        return <div>Error: {errorPositions?.message || errorCandidates?.message}</div>;
    }
    
    const positions = positionsData.data;
    const candidates = candidatesData.data;

    return (
        <div className="space-y-6">
        <h2 className="text-xl font-semibold text-violet-300">Positions</h2>

        {!positions.length ? (
            <h1 className="text-slate-400">No positions found</h1>
            ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {positions.map((position, key) => (
                <CardPosition
                    key={key}
                    title={position.title}
                    jobId={position.id}
                    uuid={candidates.uuid}
                    candidateId={candidates.candidateId}
                    applicationId={candidates.applicationId}
                />
                ))}
            </div>
            )
        }
        </div>
    )
}

export default Positions