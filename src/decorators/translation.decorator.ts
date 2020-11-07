import {Namespace, withTranslation} from "react-i18next";

export function translation(ns?: Namespace, options?: {withRef?: boolean}): any {
   return (Component: any) => {
      return (withTranslation(ns, options)(Component));
   }
}
