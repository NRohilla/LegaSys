using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.Linq;
using System.Web;

namespace LegaSysServices.App_Config
{
    public class AppConfiguration
    {
        public static string GetByKey(GlobalLegaSys pKey)
        {
            NameValueCollection section = (NameValueCollection)ConfigurationManager.GetSection("GlobalLegaSys");
            return section[pKey.ToString()].ToString();
        }

    }
}