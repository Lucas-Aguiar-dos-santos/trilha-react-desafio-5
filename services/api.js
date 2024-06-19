import axios from 'axios';



export const api  = axios.create({

    baseURL: 'https://vcvatqaqetkrqsswrqlf.supabase.co/rest/v1/Post?select=id',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjdmF0cWFxZXRrcnFzc3dycWxmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxODc1MjM4NiwiZXhwIjoyMDM0MzI4Mzg2fQ.osNZxnYphNeWUjCprkYsNTrC145qIw3i7pZSvOaCkVc", 
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjdmF0cWFxZXRrcnFzc3dycWxmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxODc1MjM4NiwiZXhwIjoyMDM0MzI4Mzg2fQ.osNZxnYphNeWUjCprkYsNTrC145qIw3i7pZSvOaCkVc"
    }
})