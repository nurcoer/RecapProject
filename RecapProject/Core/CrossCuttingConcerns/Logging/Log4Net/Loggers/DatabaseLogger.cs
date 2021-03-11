
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using log4net.Core;
using log4net.Layout;

namespace Core.CrossCuttingConcerns.Logging.Log4Net.Loggers
{
    public class DatabaseLogger : LoggerServiceBase
    {
        public DatabaseLogger() : base("DatabaseLogger")
        {
        }
    }
}

