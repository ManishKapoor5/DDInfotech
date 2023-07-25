import { Button } from '@react-email/button';

const Email = () => {
  return (
   
    <Button href="https://gmail.com" style={{width: '100%', height: '100%', alignItems: 'center', textAlign: 'center', alignSelf: 'center'}}>
   <div className="bg-[rgb(251,179,4)] rounded-md text-sm w-1/2 md:w-40 text-center h-10 flex justify-center items-center"> Submit</div>
    </Button>
   
  );
};
export default Email;