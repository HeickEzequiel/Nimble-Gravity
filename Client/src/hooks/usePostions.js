import api from "../api/nimbleGravity";
import { useQuery } from "@tanstack/react-query";

async function fetchPositions() {
    const data = await api.get('/positions');
    return data;
}
export function usePositions() {
    return useQuery({
        queryKey: ['positions'],
        queryFn: fetchPositions,
    })
}