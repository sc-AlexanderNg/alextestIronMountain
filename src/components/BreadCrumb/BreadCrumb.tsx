import Link from 'next/link';
import styles from './BreadCrumb.module.css';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

interface Breadcrumb {
  pageTitle: string;
  url: string;
  '@type': string;
  position: number;
  name: string;
  item: string;
}

const BreadCrumb = (): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const BreadcrumbData = sitecoreContext.Breadcrumbs as Breadcrumb[];
  const urlArray = BreadcrumbData?.map((crumb: Breadcrumb) => crumb.url);
  const compName = 'breadcrumb';

  BreadcrumbData?.forEach((input: Breadcrumb, index) => {
    input['@type'] = 'ListItem';
    input.position = index;
    input.name = input.pageTitle;
    input.item = input.url;
  });

  const data = {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
    itemListElement: BreadcrumbData,
  };

  if (BreadcrumbData?.length) {
    return (
      <nav className={styles.breadcrumb} data-is-breadcrumb>
        {
          <ul>
            {BreadcrumbData?.map(
              (crumb: Breadcrumb, index: number) =>
                crumb?.pageTitle && (
                  <li key={index}>
                    {index === BreadcrumbData?.length - 1 ? (
                      <span>{crumb?.pageTitle}</span>
                    ) : (
                      <Link
                        href={`${urlArray.slice(index, index + 1).join('/')}`}
                        data-clickable-id={`${compName}-details`}
                        data-clickable-text={crumb?.pageTitle}
                        data-clickable-href={`${urlArray
                          .slice(index, index + 1)
                          .join('/')}`}
                        locale={false}
                      >
                        {crumb?.pageTitle}
                      </Link>
                    )}
                    <div className={styles.arrow}></div>
                  </li>
                )
            )}
          </ul>
        }
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      </nav>
    );
  }

  return <></>;
};

export default BreadCrumb;
