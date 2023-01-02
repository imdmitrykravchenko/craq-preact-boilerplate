import { useRouter } from "router6-preact";
import { ComponentType } from "preact";
import { CraqReactReduxProvider } from "craq-preact-redux";
import { Context } from "craq";
import { Route } from "router6";

const NoPage = () => <div>No page</div>;

const Application = ({ context }: { context: Context<any, any> }) => {
  const { currentRoute } = useRouter();

  const PageComponent =
    context.getComponent<ComponentType<{ route: Route }>>(
      currentRoute.config.page,
      "page"
    ) || NoPage;

  return (
    <CraqReactReduxProvider store={context.getStore()}>
      <PageComponent route={currentRoute} />
    </CraqReactReduxProvider>
  );
};

export default Application;
