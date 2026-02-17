import { useEffect, useState } from "react";

function CardPosition(props) {

    const [repoData, setRepoData] = useState({
        uuid: "",
        jobId: "",
        candidateId:"",
        applicationId: "",
        repoUrl: ""
    });  

    useEffect(() => {
        setRepoData({
            uuid: props.uuid || "",
            jobId: props.jobId || "",
            candidateId: props.candidateId || "",
            applicationId: props.applicationId || "",
            repoUrl: ""
        });
    }, [props.uuid, props.jobId, props.candidateId, props.applicationId]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setRepoData({...repoData, [name]: value});
    }
    
    const handleSubmit = async (event) => {
    event.preventDefault();
    try {

        const response = await fetch('https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net/api/candidate/apply-to-job',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
             },
             body: JSON.stringify(repoData),
        });
        if (response.ok) {
            alert('Application submitted successfully');
        } else {
            alert('Failed to submit application');
        }
    }catch (error) {
            alert('Error submitting application');
            }
    }
  

    return (
    <div className="bg-slate-900/80 border border-white/10 rounded-xl p-5 space-y-4 shadow-lg hover:border-violet-500/40 hover:shadow-violet-500/10 transition">
    <p className="font-semibold text-violet-300">{props.title}</p>

    <form
      onSubmit={handleSubmit}
      className="space-y-3">

        <input
            placeholder="Repository URL"
            type="url"
            name="repoUrl"
            value={repoData.repoUrl}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
        />

        <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-500 active:scale-[0.98] rounded-lg py-2 font-medium transition shadow-md">
            Submit
        </button>

    </form>

    </div>
    )
}

export default CardPosition