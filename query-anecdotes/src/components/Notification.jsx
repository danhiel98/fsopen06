import { useQuery, useQueryClient } from "@tanstack/react-query"

const Notification = () => {
  const queryClient = useQueryClient()

  let notification = useQuery({
    queryKey: ['notification'],
    queryFn: () => queryClient.getQueryData(['notification'])
  })

  if (notification.data && notification.isSuccess) {
    setTimeout(() => {
      queryClient.setQueryData(['notification'], null)
    }, 5000)
  }

  if (!notification.data) {
    return <></>
  }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }

  return (
    <div style={style}>
      {notification.data}
    </div>
  )
}

export default Notification
