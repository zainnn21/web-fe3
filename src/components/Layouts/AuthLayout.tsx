type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex flex-col rounded-sm border p-5 md:p-9 gap-5 md:gap-9 border-[#F1F1F1] bg-white md:max-w-[590px] max-w-[320px] w-full ">
      {children}
    </div>
  );
};

export default AuthLayout;
