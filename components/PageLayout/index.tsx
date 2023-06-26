import cn from 'classnames';

type PageLayoutProps = {
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
};

function PageLayout({ className, innerClassName, children }: PageLayoutProps) {
  return (
    <main className={cn('bg-secondary-200', className)}>
      <div className={cn('mx-auto min-w-[375px] max-w-[768px] min-h-[100vh] border-4 border-red-500 px-4', innerClassName)}>{children}</div>
    </main>
  );
}

export default PageLayout;
