import api from "../api/nimbleGravity";
import { useQuery } from "@tanstack/react-query";

async function fetchCandidates() {
    const data = await api.get('/candidate');
    return data;
}
export function useCandidate() {
    return useQuery({
        queryKey: ['candidate'],
        queryFn: fetchCandidates,
    })
}